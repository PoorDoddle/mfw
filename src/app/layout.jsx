export const metadata = {
  title: "Le Gym Appo",
  description: "Gym app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className="font-sans bg-gym-app-background h-screen text-white bg-cover"
          id="root"
        >
          {children}
        </div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  );
}
