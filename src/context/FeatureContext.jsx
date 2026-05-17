import {
 createContext,
 useContext,
 useState,
} from "react";

const FeatureContext = createContext();

export const FeatureProvider = ({
 children,
}) => {

 const [features, setFeatures] = useState({
   analytics: true,
   darkMode: false,
   adminPanel: true,
 });

 const toggleFeature = (featureName) => {

   setFeatures((prev) => ({
     ...prev,
     [featureName]: !prev[featureName],
   }));
 };

 return (
   <FeatureContext.Provider
     value={{
       features,
       toggleFeature,
     }}
   >
     {children}
   </FeatureContext.Provider>
 );
};

export const useFeatures = () =>
 useContext(FeatureContext);
