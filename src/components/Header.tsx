import profileImage from "../assets/images/photo.png";

const Header = () => {
  return (
    <>
      <section className="flex items-center justify-between container mx-auto px-7 md:px-20 ">
        <div className="flex flex-col md:flex items-start justify-between w-full h-14 gap-2  mb-10">
          <h2 className="text-2xl font-semibold text-[#F4F6FA] my-2">To do List</h2>
          <p>Adicione uma tarefa</p>
        </div>

        <img
          src={profileImage}
          alt="user avatar"
          className="h-[52px] w-[52px] rounded-full"
        />
      </section>
      <hr className=" mx-auto w-[calc(100%-60px)] md:w-[calc(100%-160px)] border-zinc-500 border-1 my -5" />
    </>
  );
};

export default Header;
