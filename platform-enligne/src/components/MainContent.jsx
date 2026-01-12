export default function MainContent({ activeItem }) {
  return (
    <div className="p-8 md:p-12">
      <h1>Content for {activeItem}</h1>
      {/* Your content here */}
    </div>
  );
}