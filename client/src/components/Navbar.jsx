import 'font-awesome/css/font-awesome.min.css';
import { useShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { navbarItems, selected, setSelected, navigate } = useShopContext();

  return (
    <div className="flex flex-col py-1 shadow  w-fit h-screen bg-white">
      {navbarItems.map(item => (
        <i
          key={item.id}
          onClick={() => {setSelected(item.id); navigate(item.dest)}}
          className={`hover:cursor-pointer hover:bg-[#ebebeb] fa fa-2x ${item.icon} 
            ${selected === item.id ? 'text-[#0b12b8] bg-[#f3f3f3]' : ''}
            p-5 transition-all`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default Navbar;
