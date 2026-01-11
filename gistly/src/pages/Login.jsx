const GITHUB_LOGIN_URL =
  "http://127.0.0.1:8000/accounts/github/login/";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => {
          window.location.href = GITHUB_LOGIN_URL;
        }}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Continue with GitHub
      </button>
    </div>
  );
}
