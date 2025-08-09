import CommonLayout from "./components/layouts/CommonLayout";

function App({ children }: { children: React.ReactNode }) {
  return <CommonLayout>{children}</CommonLayout>;
}

export default App;
