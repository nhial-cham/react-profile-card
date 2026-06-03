import ProfileCard from "./components/ProfileCard"; 
import SkillsList from "./components/SkillsList";

function App() {
    return (
        <>
        <h1>First react application!</h1>

        <ProfileCard 
            name="Nhial Cham" 
            role="Full-Stack Software Developer" 
            />

        <SkillsList />
        
        </>
    );
}

export default App;