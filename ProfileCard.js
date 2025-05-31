export default function ProfileCard({ user }) {
  return (
    <div className="p-4 border rounded-xl shadow-lg bg-white/10">
      <img src={user.avatar} alt="PFP" className="rounded-full w-20 h-20" />
      <h2>{user.displayName}</h2>
      <p>{user.bio}</p>
    </div>
  );
}
