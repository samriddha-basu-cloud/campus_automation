package main

import (
	"context"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type User struct {
	FullName        string
	RegistrationNum string
	DateOfBirth     string
	PhoneNumber     string
	OfficialEmail   string
	PersonalEmail   string
	Course          string
	Department      string
	Specialization  string
	GuardiansName   string
	GuardiansPhone  string
	PermanentAddr   string
	CurrentAddr     string
}

var client *mongo.Client

func main() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	var err error
	client, err = mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(context.Background())

	r := mux.NewRouter()

	r.HandleFunc("/", showRegistrationForm).Methods("GET")
	r.HandleFunc("/register", registerUser).Methods("POST")

	http.Handle("/", r)

	log.Println("Server started on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func showRegistrationForm(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("form.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = tmpl.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func registerUser(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	user := User{
		FullName:        r.FormValue("fullName"),
		RegistrationNum: r.FormValue("registrationNum"),
		DateOfBirth:     r.FormValue("dateOfBirth"),
		PhoneNumber:     r.FormValue("phoneNumber"),
		OfficialEmail:   r.FormValue("officialEmail"),
		PersonalEmail:   r.FormValue("personalEmail"),
		Course:          r.FormValue("course"),
		Department:      r.FormValue("department"),
		Specialization:  r.FormValue("specialization"),
		GuardiansName:   r.FormValue("guardiansName"),
		GuardiansPhone:  r.FormValue("guardiansPhone"),
		PermanentAddr:   r.FormValue("permanentAddr"),
		CurrentAddr:     r.FormValue("currentAddr"),
	}

	collection := client.Database("userdb").Collection("users")
	_, err = collection.InsertOne(context.Background(), user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	http.Redirect(w, r, "/success", http.StatusSeeOther)
}

func init() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017") // Replace with your MongoDB connection string
	var err error
	client, err = mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal("Failed to connect to MongoDB:", err)
	}
}

func cleanup() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := client.Disconnect(ctx); err != nil {
		log.Fatal(err)
	}
}


