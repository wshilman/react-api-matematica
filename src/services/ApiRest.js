import http from "./http-common";

class ApiRest {
    login({name,lastname,classroom}) {
        return http.post("/session/login",{name,lastname,classroom});
    }
    logout({nickname}) {
        return http.post("/session/logout",{nickname});
    }
    getAll() {
        return http.get("/tutorials");
    }

    get(id) {
        return http.get(`/tutorials/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
}

export default new ApiRest();