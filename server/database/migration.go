package database

import (
	"kalbeonlineshop/models"
	postgres "kalbeonlineshop/pkg/database"
)

func RunMigration() {
	err := postgres.DB.AutoMigrate(&models.User{}, &models.Product{})

	if err != nil {
		panic("Migration Failed")
	}
}
