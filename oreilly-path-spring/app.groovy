@RestController
public class Applicaiton {
    @RequestMapping("/")
    public String hello() {
        return "Hello World!"
    }
}