 # Car Rental App

This is a Car Rental web application built with Next.js, TypeScript, and Tailwind CSS.

## Demo
![Alt text](<Screenshot 2023-09-22 at 02.29.30.png>)

You can access the deployed application here: [Live Demo](https://cars-sage.vercel.app/)

## Features

- Browse a variety of cars available for rent.
- View detailed information about each car, including specifications, pricing, and availability.
- Filter cars based on various criteria such as car type, brand, and price range.
- Book cars for rental by selecting the desired dates and providing your contact information.
- View your booking history and the status of your current bookings.
- Responsive design for both desktop and mobile devices.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/) (for authentication and data storage)
- [Axios](https://axios-http.com/) (for API requests)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/RitaDee/cars.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cars
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a Firebase project and set up Firebase Authentication and Realtime Database.

5. Create a `.env.local` file in the root directory of the project and add your Firebase configuration as environment variables:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Browse the list of available cars.
- Use the filter options to narrow down your search.
- Click on a car to view more details and book it.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. 
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Next.js, TypeScript, and Tailwind CSS communities for providing excellent tools and documentation.

## Contact

If you have any questions or feedback, feel free to contact the project owner:

- GitHub: [RitaDee](https://github.com/RitaDee)

Thank you for using the Car Rental App! Enjoy browsing and booking your dream car.