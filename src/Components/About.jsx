import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-2xl caontainer m-auto px-4 md:px-20 my-10 ">
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p>
        Hello, i'm Bipul Pratap Singh, a passionate MERN Stack Developer with a
        keen eye for developing. with a background in IT , i strive to crate
        impactful and visually stunning Software Solution that leave a lasting
        impression.
      </p>
      <br />
      <h1 className="text-green-500 font-semibold text-xl">
        Education & Training
      </h1>
      <span className="text-xl text-bold">
        Master’s Of Computer Application{" "}
      </span>
      <p> .Quantum Univercity roorkee Uttarkhand</p>
      <span className="text-xl text-bold">
        Bachelor Of Computer Application
      </span>
      <p>.Dr Virendra Swarup Institute of Computer Studies (VSICS), Kanpur</p>
      <span className="text-xl text-bold">Certifications</span>
      <p>
        {" "}
        .Ethical hacking training , Python+ security training (training project)
      </p>
      <br />
      <br />
      <h1 className="text-green-500 font-semibold text-xl">
        Skills & Expertise
      </h1>
      <span className="text-xl text-bold">Technical Skills</span>
      <p> .Mern stack development , Git , Figma, Data Entry.</p>
      <span className="text-xl text-bold">Languages</span>
      <p>.JavaScript , Nodejs ,Python</p>
      <br />
      <br />
      <h1 className="text-green-500 font-semibold text-xl">
        Project Experience
      </h1>
      <span className="text-xl text-bold text-red-700">Food-Delivery App</span>
      <p>
        For purchasing Goods and products online with add to cart .include all
        other service like purchasing good product and updating clothes and
        more.Authentication using JWT for secure sessions. Admins can manage
        restaurant profiles, availability, and menus. Users can browse menus,
        select items, and place orders. Real-time updates on order status:
        “Preparing”, “On the way”, “Delivered”.
      </p>
      <br />
      <span className="text-xl text-bold">Frontend (React)</span>
      <p>
        Build responsive user interfaces with React. Use Redux Toolkit for state
        management (e.g., managing the cart, user sessions). Axios for making
        HTTP requests to the backend API.
      </p>
      <br />
      <span className="text-xl text-bold">Backend (Node.js, Express)</span>
      <p>
        Create RESTful APIs to handle requests (e.g., fetch restaurant data,
        place orders). Use Express.js as the web framework to structure the app.
      </p>
      <br />
      <span className="text-xl text-bold"> Database (MongoDB)</span>
      <p>
        Store and manage user data, restaurant details, orders, and more in
        MongoDB. Use Mongoose for schema-based data modeling.
      </p>
      <br />
      <span className="text-xl text-bold">Real-time Updates (Socket.IO)</span>
      <p>
        For order status updates, use Socket.IO to provide real-time
        notifications.
      </p>
      <br />
      <span className="text-xl text-bold">Security</span>
      <p>
        Secure user data with JWT for token-based authentication. Ensure proper
        validation and protection against vulnerabilities (e.g., SQL injection,
        XSS).
      </p>
      <br />
      <br />
      <span className="text-xl text-bold text-red-700">E-commerce Store</span>
      <p>
        MERN stack (MongoDB, Express, React, Node.js) is a great project to gain
        hands-on experience in full-stack development. Below is a detailed
        breakdown of how you can approach building such an app, which covers key
        aspects of both frontend and backend development.Cart data is managed
        using Redux on the frontend and stored in localStorage for persistence
      </p>
      <br />
      <span className="text-xl text-bold">Frontend (React)</span>
      <p>
        React for building the user interface. Redux Toolkit for managing the
        global state, particularly for the cart, user authentication, and
        product data. Axios for making HTTP requests to interact with the
        backend API.
      </p>
      <br />
      <span className="text-xl text-bold">Backend (Node.js, Express)</span>
      <p>
        Node.js and Express.js to handle server-side logic and build the REST
        API for products, users, orders, and authentication. Mongoose to
        interact with MongoDB for storing and managing data.
      </p>
      <br />
      <span className="text-xl text-bold"> Database (MongoDB)</span>
      <p>
        Store products, users, and orders. Use Mongoose schemas to define the
        structure for each resource.
      </p>
      <br />
      <span className="text-xl text-bold">Security</span>
      <p>
        Use bcrypt.js for password hashing. Implement authentication and
        authorization using JWT. Use Helmet and CORS to secure HTTP headers and
        prevent cross-site vulnerabilities.
      </p>
      <br />
      <br />
      <span className="text-xl text-bold  text-red-700 ">Achievements</span>
      <p>
        Designed and built full-stack web applications using MongoDB,
        Express.js, React.js, and Node.js (MERN),Built secure login and
        registration systems with JWT (JSON Web Tokens) and role-based access
        control.Successfully connected APIs with front-end components to fetch
        and display dynamic data.Integrated WebSockets and Socket.io for
        real-time updates and communication in applications such as chat apps or
        live dashboards.
      </p>
      <br />
      <br />
      <span className="text-xl text-bold  text-red-700 ">Statement</span>
      <p>
        MERN Stack Developer with a passion for building scalable, responsive
        web applications using MongoDB, Express.js, React.js, and Node.js. I
        have hands-on experience in developing full-stack applications,
        integrating RESTful APIs, and working with modern libraries such as
        React-Redux for efficient state management. Adept at implementing secure
        authentication systems, optimizing database performance, and delivering
        a seamless user experience across devices. My projects reflect a
        commitment to clean, maintainable code, and I thrive in collaborative
        environments using agile methodologies. I am always eager to learn new
        technologies and contribute to innovative, real-world solutions.
      </p>
      <hr />
    </div>
  );
};

export default About;
