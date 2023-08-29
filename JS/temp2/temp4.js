// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000); // Delay based on index (1 second for each number)
// }


// // // function fetchData() {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             reject('Failed to fetch data.');
// // //         }, 1000);
// // //     }).catch((error)=>{
// // //         console.log(error.message);
// // //     });
// // // }

// // // function processData() {
// // //     fetchData().then(data => {
// // //         console.log(data);
// // //     });
// // // }

// // // processData();


// // //promies.all


// // // function fetchData() {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve(['apple', 'banana', 'cherry']);
// // //         }, 500);
// // //     });
// // // }

// // // function fetchDetails(item) {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve(`${item}_details`);
// // //         }, 300);
// // //     });
// // // }

// // // function getAllDetails() {
// // //     fetchData().then(items => {
// // //         items.forEach(item => {
// // //             fetchDetails(item).then(details => {
// // //                 console.log(details);
// // //             });
// // //         });
// // //     });
// // // }

// // // getAllDetails();

// // class UserProfile {
// //     constructor(elementId) {
// //         this.profileElement = document.getElementById(elementId);
// //         this.bindEvents();
// //     }

// //     bindEvents() {
// //         this.profileElement.addEventListener('click', function() {
// //             alert('Profile clicked!');
// //         });
// //     }
// // }

// // // In another part of the app
// // for (let i = 0; i < 10; i++) {
// //     new UserProfile(`profile-${i}`);
// // }

// class UserService {
//     constructor() {
//         this.apiUrl = 'https://api.example.com/users/';
//     }

//     fetchUser(userId) {
//         return fetch(`${this.apiUrl}${userId}`)
//             .then(response => response.json())
//             .then(data => data);
//     }
// }

// const userService = new UserService();

// // Example usage in the app:
// userService.fetchUser(123).then(data => console.log(data));


// class RegistrationService {
//     constructor() {
//         this.users = [];
//     }

//     registerUser(user) {
//         if (!user || !user.username || !user.email) {
//             throw new Error("Incomplete user data");
//         }

//         // Validate uniqueness of the username
//         for (let i = 0; i < this.users.length; i++) {
//             let existingUser = this.users[i];
//             while (existingUser.username === user.username) {
//                 user.username += "_1";
//             }
//         }

//         this.users.push(user);
//     }
// }