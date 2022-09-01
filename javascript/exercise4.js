console.log(" this is the exercise no 4 ")


/*
create a class library and implement the following 
constructor must be take a booklist as an argument

getbooklist();
issuebook(bookname , user);
returnbook(bookname)

*/

// create a library class 
class library {
    constructor(booklist) {
        this.booklist = booklist;
        this.issuebooks = {};
    }

    getBooklist() {
        this.booklist.forEach(element => {
            console.log(element);
        });

    }
    issuebook(bookname, user) {
        if (this.issuebooks[bookname] == undefined) {
            this.this.issuebooks[bookname] = user;
        } else {
            console.log("someone issue books already issued")
        }

    }

    returnbook(bookname) {
        delete this.issuebook[bookname];
    }
}

let akashlib = new library("java", "python", "js", "web development");
