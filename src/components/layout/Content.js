import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';
import Kanaban from '../Kanaban'

export const Content = () => (
  <section className="content">
    <Sidebar />
    <Kanaban />
    <Tasks />
  </section>
);
const itemsFromBackend = Tasks;

export default itemsFromBackend