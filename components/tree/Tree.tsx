'use client';

import { Timeline } from 'flowbite-react';

export default function Tree() {
  const treeList:{title:string, body: string}[] = [
    {title: 'Front end', body: 'javascript, nodejs, nextjs, ...'},
    {title: 'Back end', body: 'java, spring boot, ...'},
    {title: 'Containers', body: 'docker, kubernetes, ...'},
  ];

  return (
    <Timeline>
      {
        treeList.map((tree:{title:string, body: string}, idx:number) => {
          return (
            <Timeline.Item key={`idx-${idx}`}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>{tree.title}</Timeline.Title>
                <Timeline.Body>{tree.body}</Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          );
        })
      }
    </Timeline>
  );
}