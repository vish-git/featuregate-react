import UserList
from "./components/UserList";

import Analytics
from "./components/Analytics";

import {
 useFeatures,
} from "./context/FeatureContext";

function App() {

 const {
   features,
   toggleFeature,
 } = useFeatures();

 return (
   <div
     style={{
       padding: "20px",
     }}
   >

     <h1>FeatureGate React</h1>

     <button
       onClick={() =>
         toggleFeature("analytics")
       }
     >
       Toggle Analytics
     </button>

     <hr />

     <UserList />

     <hr />

     {features.analytics && (
       <Analytics />
     )}

   </div>
 );
}

export default App;
