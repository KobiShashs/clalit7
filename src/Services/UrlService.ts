abstract class Global{
}
class Development extends Global{
    public urls = {
        tasks: 'http://localhost:8080/api/tasks',
        auth: 'http://localhost:8080/api/auth',
        cats: 'http://localhost:8080/api/cats',
        dogs: 'http://localhost:8080/api/dogs'
    }
}
class Production extends Global{
    public urls ={
        tasks: 'www.clalit-app.com/api/tasks',
        auth: 'www.clalit-app.com/api/auth',
        cats: 'www.clalit-app.com/api/cats',
        dogs: 'www.clalit-app.com/api/dogs',
    }
}
const urlService = (process.env.NODE_ENV === "production") ? new Production() : new Development();
export default urlService;

