const { createContext, useContext, useState } = require("react");
const PhoneContext = createContext();
const PhoneProvider = ({ children }) => {
  const [phone, setPhone] = useState(null);
  return (
    <PhoneProvider.Provider value={{ phone, setPhone }}>
      {children}
    </PhoneProvider.Provider>
  );
};

export const usePhoneState = () => {
  return useContext(PhoneContext);
};

export default PhoneProvider;
