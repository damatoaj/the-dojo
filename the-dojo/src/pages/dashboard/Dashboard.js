import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/projectlist/ProjectList';
//styles
import './Dashboard.css'

export default function Dashboard() {
    const { documents, error } = useCollection('projects');
    return (
       <div>
           <h2 className="title">Dashboard</h2>
           {error && <p className="error">{error}</p>}
           {documents && <ProjectList projects={documents} />}
       </div>
    )
}