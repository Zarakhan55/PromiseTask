

// Topic: Promise & Promise Chaining


// ================= TASK 1 =================
// User Login

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User logged in");
        }, 1000);
    });
}

loginUser()
    .then((result) => {
        console.log("Task 1:", result);
    });


// ================= TASK 2 =================
// Load Products

function loadProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Products loaded");
        }, 1000);
    });
}

loadProducts()
    .then((result) => {
        console.log("Task 2:", result);
    });


// ================= TASK 3 =================
// Payment

function payment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Payment successful");
        }, 1000);
    });
}

payment()
    .then((result) => {
        console.log("Task 3:", result);
    });


// ================= TASK 4 =================
// Order

function order() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order placed");
        }, 1000);
    });
}

order()
    .then((result) => {
        console.log("Task 4:", result);
    });


// ================= TASK 5 =================
// Registration

function register() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Registration successful");
        }, 1000);
    });
}

register()
    .then((result) => {
        console.log("Task 5:", result);
    });


// ================= TASK 6 =================
// Promise Chaining

function stepOne() {
    return Promise.resolve("Login successful");
}

function stepTwo() {
    return Promise.resolve("Products loaded");
}

stepOne()
    .then((result) => {
        console.log("Task 6:", result);
        return stepTwo();
    })
    .then((result) => {
        console.log("Task 6:", result);
    });


// ================= TASK 7 =================
// Order Chaining

function placeOrder() {
    return Promise.resolve("Order placed");
}

function makePayment() {
    return Promise.resolve("Payment done");
}

placeOrder()
    .then((result) => {
        console.log("Task 7:", result);
        return makePayment();
    })
    .then((result) => {
        console.log("Task 7:", result);
    });


// ================= TASK 8 =================
// Food Delivery

function prepareFood() {
    return Promise.resolve("Food prepared");
}

function deliverFood() {
    return Promise.resolve("Food delivered");
}

prepareFood()
    .then((result) => {
        console.log("Task 8:", result);
        return deliverFood();
    })
    .then((result) => {
        console.log("Task 8:", result);
    });


// ================= TASK 9 =================
// Student Admission

function registerStudent() {
    return Promise.resolve("Student registered");
}

function confirmAdmission() {
    return Promise.resolve("Admission confirmed");
}

registerStudent()
    .then((result) => {
        console.log("Task 9:", result);
        return confirmAdmission();
    })
    .then((result) => {
        console.log("Task 9:", result);
    });


// ================= TASK 10 =================
// Job Application

function submitCV() {
    return Promise.resolve("CV submitted");
}

function interview() {
    return Promise.resolve("Interview completed");
}

function jobResult() {
    return Promise.resolve("You are selected");
}

submitCV()
    .then((result) => {
        console.log("Task 10:", result);
        return interview();
    })
    .then((result) => {
        console.log("Task 10:", result);
        return jobResult();
    })
    .then((result) => {
        console.log("Task 10:", result);
    });