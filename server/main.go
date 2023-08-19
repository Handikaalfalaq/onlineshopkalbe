package main

import (
	"fmt"
	"kalbeonlineshop/database"
	postgres "kalbeonlineshop/pkg/database"
	"kalbeonlineshop/routes"
	// "os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	godotenv.Load()
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE},
		AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization", echo.HeaderOrigin, echo.HeaderAccept},
	}))

	postgres.DatabaseConnection()
	database.RunMigration()

	routes.RouteInit(e.Group("/kalbeonlineshop/api/v1"))
	// PORT := os.Getenv("PORT")
	fmt.Println("server running localhost:5000")
	e.Logger.Fatal(e.Start("localhost:5000"))
}
