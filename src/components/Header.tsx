import profileImage from "../assets/images/photo.png";

const Header = () => {
  return (
    <>
      <section className="flex items-center justify-between container mx-auto px-7 pt-10 md:px-20 max-w-[900px]">
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
      
    </>
  );
};

export default Header;
