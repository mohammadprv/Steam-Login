module.exports = class Application {
    
    #express = require('express');
    #app = this.#express();

    constructor(PORT) {
        // this.configApplication()
        this.createServer(PORT);
        this.createRoutes();
        this.errorHandler();
    }

    configApplication() {
    }

    createServer(PORT) {
        const http = require('http');
        const server = http.createServer(this.#app);
        server.listen(PORT, () => {
            console.log(`Server Is Up And Online On Port: ${PORT}`);
        });
    }

    createRoutes() {
        this.#app.get("/", (req, res, next) => {
            return res.json({
                message: "This is Steam-Login Project",
                author: "Mohammad Peyravi"
            });
        })
    }

    errorHandler() {
        this.#app.use((req, res, next) => {

            //? 404 Handler 
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Page Not Founded!"
            });
        });

        //? Error Handler
        this.#app.use((err, req, res, next) => {
            const status = err?.status || 500;
            const message = err?.message || "Internal Server Error!";
            return res.status(status).json({
                status,
                success: false,
                message
            })
        })
    }
}