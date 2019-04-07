import { JsonPlaceholderFacade } from "./json-placeholder-facade";
import { JsonPlaceholderService } from "./json-placeholder-service";

let facade = new JsonPlaceholderFacade(new JsonPlaceholderService());
facade.getUser(1).then(user => {
    if (user) {
        console.log("User found: ", user);
    } else {
        console.log("User not found.");
    }
})
