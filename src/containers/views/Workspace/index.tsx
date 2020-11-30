import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
export interface IProps {}
const Workspace: FC = ({}: IProps) => {
  const location = useLocation();
  console.log(location, 'workspace');
  return (
    <div>
      <p>我的工作区</p>
    </div>
  );
};

export default Workspace;
