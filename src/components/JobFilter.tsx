import React, { useReducer } from 'react';
import { Job, ExperienceFilter } from '../types/job';
import { jobs } from '../data/jobs.ts';
import './JobFilter.css';

type State = {
  selectedExperience: ExperienceFilter;
};

type Action =
  | { type: 'SET_EXPERIENCE'; payload: ExperienceFilter };

const initialState: State = {
  selectedExperience: 'any',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_EXPERIENCE':
      return { ...state, selectedExperience: action.payload };
    default:
      return state;
  }
}

export const JobFilter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredJobs = jobs.filter(job => {
    if (state.selectedExperience === 'any') return true;
    switch (state.selectedExperience) {
      case '1-3':
        return job.experience === '1–3 года';
      case '3-5':
        return job.experience === '3–5 лет';
      case '5+':
        return job.experience === '5+ лет';
      default:
        return true;
    }
  });

  return (
    <div className="job-filter">
      <div className="filter-controls">
        <label htmlFor="experience">Опыт работы:</label>
        <select
          id="experience"
          value={state.selectedExperience}
          onChange={(e) =>
            dispatch({ type: 'SET_EXPERIENCE', payload: e.target.value as ExperienceFilter })
          }
        >
          <option value="any">Любой</option>
          <option value="1-3">1–3 года</option>
          <option value="3-5">3–5 лет</option>
          <option value="5+">5+ лет</option>
        </select>
      </div>

      <div className="jobs-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="salary">{job.salary}</p>
            <p className="location">{job.location}</p>
            <p className="experience">{job.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 