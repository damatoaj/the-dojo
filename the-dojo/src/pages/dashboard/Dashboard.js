import { useCollection } from '../../hooks/useCollection';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import ProjectList from '../../components/projectlist/ProjectList';
import ProjectFilter from './ProjectFilter';
//styles
import './Dashboard.css'

export default function Dashboard() {
    const { documents, error } = useCollection('projects');
    const [currentFilter, setCurrentFilter] = useState('all');
    const { user } = useAuthContext();

    const changeFilter= (newFilter) => {
        setCurrentFilter(newFilter);
    };

    const projects = documents ? documents.filter((document) => {
        switch(currentFilter) {
            case 'all':
                return true
            case 'mine':
                let assignedToMe = false;
                document.assignedUsersList.forEach(u => {
                    if (u.id === user.uid) {
                        assignedToMe = true
                    }
                })
                return assignedToMe
            case 'development':
                return document.category === currentFilter
            case 'design':
                return document.category === currentFilter
            case 'sales':
                return document.category === currentFilter
            case 'marketing':
                return document.category === currentFilter
            default:
                return true
        }
    }) : null;

    return (
       <div>
           <h2 className="title">Dashboard</h2>
           {error && <p className="error">{error}</p>}
           {documents && (
            <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} /> 
           )}
           {documents && <ProjectList projects={projects} />}
       </div>
    )
};