// import axios from 'axios';

// const API_URL = 'http://localhost:3000';

// interface User {
//     name: string;
//     email: string;
//     password: string;
//     phone: string;
// }

// interface LoginResponse {
//     message: string;
//     user?: User;
// }

// interface RegisterResponse {
//     name: string;
//     email: string;
//     password: string;
//     phone: string;
// }

// async function registerUser(user: User): Promise<void> {
//     try {
//         const response = await axios.post<RegisterResponse>(`${API_URL}/register`, user);
//         console.log('User registered successfully:', response.data);
//     } catch (error) {
//         if (axios.isAxiosError(error) && error.response) {
//             console.error('Error registering user:', error.response.data);
//         } else {
//             console.error('Unknown error occurred during registration:', error);
//         }
//     }
// }

// async function loginUser(email: string, password: string): Promise<void> {
//     try {
//         const response = await axios.post<LoginResponse>(`${API_URL}/login`, { email, password });
//         console.log('Login successful:', response.data);
//     } catch (error) {
//         if (axios.isAxiosError(error) && error.response) {
//             console.error('Error logging in:', error.response.data);
//         } else {
//             console.error('Unknown error occurred during login:', error);
//         }
//     }
// }

// // // Exemplo de uso
// // const newUser: User = {
// //     name: 'Jane Doe',
// //     email: 'jane.doe@example.com',
// //     password: 'mysecurepassword',
// //     phone: '1234567890',
// // };

// // // Registrar o novo usuário
// // registerUser(newUser);

// // // Fazer login
// // loginUser('jane.doe@example.com', 'mysecurepassword');
