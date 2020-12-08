import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/img/logo.svg';
import api from '../../services/api';

interface RepositoryParams{
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    }
}


const Repositories: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();

    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        

        async function loadData(){

            const [repository, issues] = await Promise.all([
                await api.get<Repository>(`repos/${params.repository}`),
                api.get<Issue[]>(`repos/${params.repository}/issues`)
            ]);
    
            setRepository(repository.data);
            setIssues(issues.data);
        };

        loadData();
    }, [params.repository])
    
    
    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to="/dashboard">
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>

            {repository && (
                <RepositoryInfo>
                <header>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{repository.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repository.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repository.open_issues_count}</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
            )}
            
            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}
                
            </Issues>
        </>
    );
}

export default Repositories;