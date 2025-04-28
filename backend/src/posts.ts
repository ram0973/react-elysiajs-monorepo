async function addUser() {
  try {
    // Prepare book data using the NewBook type
    const bookData: User[] = [
      {
        title: "TypeScript Programming",
        author: "Boris Cherny",
        price: 32.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Node.js Design Patterns",
        author: "Mario Casciaro",
        price: 39.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Learning Drizzle ORM",
        author: "John Smith",
        price: 29.50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }  
}