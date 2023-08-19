package models

import "time"

type User struct {
	CustomerId      int       `json:"customerId" gorm:"primary_key"`
	Email           string    `json:"email" gorm:"varchar(255)"`
	Password        string    `json:"password" gorm:"varchar(255)"`
	CustomerName    string    `json:"customerName" gorm:"varchar(255)"`
	CustomerAddress string    `json:"customerAddress" gorm:"varchar(255)"`
	Gender          string    `json:"gender" gorm:"varchar(255)"`
	TanggalLahir    string    `json:"tanggalLahir" gorm:"varchar(255)"`
	Role            string    `json:"role"`
	Token           string    `json:"token"`
	CreatedAt       time.Time `json:"created_at"`
	UpdateAt        time.Time `json:"update_at"`
}

type UsersProfileResponse struct {
	CustomerId      int    `json:"customerId" form:"customerId"`
	CustomerName    string `json:"customername"`
	Email           string `json:"email"`
	Password        string `json:"password"`
	CustomerAddress string `json:"customerAddress"`
	Gender          string `json:"gender"`
	TanggalLahir    string `json:"tanggalLahir"`
	Role            string `json:"role"`
}

func (UsersProfileResponse) TableName() string {
	return "users"
}
