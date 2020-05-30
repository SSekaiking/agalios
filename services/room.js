
import { database, auth } from '../firebase';


export function create_room() {

    database.ref('rooms/' + auth.currentUser.uid).push({
        "name": "test room",
        "members": {
            [auth.currentUser.uid]: true
        }
    }).then((d)=>{
        alert("room created");
        console.log(d);
    }).catch((error)=>{
        alert("operation failed! check console for detail!")
        console.log(error)
    });

}

export function join_room(urid) {
    database.ref('/rooms/test/test/members').push({
        [auth.currentUser.uid]: true        
    }).then((d)=>{
        alert("room created");
        console.log(d);
    }).catch((error)=>{
        alert("operation failed! check console for detail!")
        console.log(error)
    });

}

export function delete_room() {

    database.ref('rooms/' + auth.currentUser.uid).remove()
    .then((d)=>{
        alert("room deleted");
        console.log("room deleted");
    }).catch((error)=>{
        alert("operation failed! check console for detail!")
        console.log(error)
    });
}

export function set_room_privacy() {

}

export function set_room_admin() {

}

export function name_room() {

}


