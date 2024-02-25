const Inline = () => {
  // two curly bracket use because 1 for js and 1 for object
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "1rem",
          border: "1px solid red",
          borderRadius: "4px",
          backgroundColor: "#f4f4f4",
        }}
      >
        hello, I&apos;m card
      </div>
    </div>
  );
};
export default Inline;
