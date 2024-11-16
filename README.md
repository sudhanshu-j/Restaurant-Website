# Restaurant Website

## Overview

This project is a fully responsive restaurant website created using **HTML**, **CSS**, **JavaScript**, and **Swiper CDNJS** for image slider functionality. It showcases the restaurant's menu, ambiance, and services, providing an engaging user experience.

## Features

- **Responsive Design**: Optimized for various devices, including desktops, tablets, and mobile phones.

- **Interactive Menu**: Dynamic display of the restaurant's menu items with descriptions and prices.

- **Contact Form**: Allows customers to make reservations or inquiries directly from the website.

## Technologies Used

- **HTML**: Provides the basic structure of the website.

- **CSS**: Used for styling the website to create a visually appealing interface.

- **JavaScript**: Adds interactivity and dynamic behavior to the website.

- **Swiper CDNJS**: Used for creating responsive and touch-friendly sliders.


## Setup and Installation

- To run this project locally, follow these steps:

1. **Clone the repository:**
      ```bash
       git clone https://github.com/your-username/restaurant-website.git
      ```

2. **Navigate to the project directory:**
     ```bash
       cd restaurant-website
     ```

4. **Open the index.html file in your web browser**

## Usage
 
 - To use Swiper for the image gallery, include the Swiper CSS and JS files in your index.html:
    ```bash
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    ```
    ```bash 
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    ```
    ```bash
    Initialize Swiper in your script.js:
    ```
    ```bash
    <script>
      let swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
      delay: 7500,
      disableOnInteraction: false,
      },
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      loop: true,
    });
   </script>
   ```


## File Structure:
```bash
restaurant-website/

│   └── styles.css
│
│   └── script.js
│
├── images/
│   └── (image files)
│
├── index.html
│
└── README.md
```

Thank you for checking out my project! Enjoy exploring the restaurant website.


