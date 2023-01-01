import { BasicInfo, Bio, Likes, Skills } from "@/ui/profile/imfo";

const Page = () => {
  return (
    <div className="font-serif">
      <h2 className="mb-4 text-lg">Profile</h2>
      <div className="grid grid-cols-2 gap-4">
        <BasicInfo />
        <Likes />
        <Skills />
        <Bio />
      </div>
    </div>
  );
};

export default Page;
