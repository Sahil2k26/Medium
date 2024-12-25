type Blog = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
  };
  
  const featuredBlogs: Blog[] = [
    { id: 1, title: 'Blog 1', excerpt: 'Lorem ipsum...', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Blog 2', excerpt: 'Lorem ipsum...', image: 'path/to/image2.jpg' },
  ];
  
  const FeaturedPosts: React.FC = () => (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  export default FeaturedPosts;
  