export async function getServerSideProps(context) {
  const { username } = context.params;
  // Fetch user data from Firestore (stub)
  return {
    props: { username },
  };
}
export default function UserProfile({ username }) {
  return <div>Profile Page for {username}</div>;
}
