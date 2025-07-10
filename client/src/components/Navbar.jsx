import 'font-awesome/css/font-awesome.min.css';
import { useShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { navbarItems, selected, setSelected, navigate } = useShopContext();

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-full px-6 py-3 flex gap-6 z-50">
      {navbarItems.map(item => (
        <div
          key={item.id}
          onClick={() => {
            setSelected(item.id);
            navigate(item.dest);
          }}
          className={`flex flex-col items-center justify-center cursor-pointer transition-all 
          ${selected === item.id ? 'text-[#0b12b8]' : 'text-gray-500 hover:text-[#0b12b8]'}`}
        >
          <div
            className={`fa fa-2x ${item.icon} 
              p-3 rounded-full transition-all 
              ${selected === item.id ? 'bg-[#f3f3f3]' : 'hover:bg-gray-100'}`}
            aria-hidden="true"
          />
          <span className="text-xs mt-1 capitalize">{item.id}</span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
