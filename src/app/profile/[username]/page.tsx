const ProfilePage = async ({ params }: { params: { username: string } }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //   console.log(params);
  return <div>ProfilePage</div>;
};

export default ProfilePage;
