package routes

import (
	"kalbeonlineshop/handlers"
	postgres "kalbeonlineshop/pkg/database"
	"kalbeonlineshop/repositories"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group) {
	userRepository := repositories.RepositoryUser(postgres.DB)
	h := handlers.HandlerUser(userRepository)

	e.GET("/users", h.GetAllUser)
	e.GET("/user/:id", h.GetUserById)
	e.PATCH("/user/:id", h.UpdateDataUser)
	e.DELETE("/user/:id", h.DeleteDataUser)
}
