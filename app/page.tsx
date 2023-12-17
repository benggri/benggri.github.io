import { Avatar, Card, Kbd } from 'flowbite-react';
import Tree from '@/components/tree/Tree';

export default function Page() {
  const getCareer = () => {
    const startDate: Date = new Date('2016-04-18');
    const endDate: Date = new Date();
    const diffDate = new Date(endDate.getTime() - startDate.getTime());
    
    const result = `${String(diffDate.getFullYear() - 1970).padStart(2, '0')}년 ${String(diffDate.getMonth()+1).padStart(2, '0')}월`;
    return result;
  }

  return (
    <div>
      <Card className='w-full'>
        <div className="flex flex-col items-center pb-10">
          <Avatar color={'primary'} rounded bordered size={'xl'}></Avatar>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Benggri</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">개인 학습 공간</span>
        </div>
      </Card>
      <div className='mt-2 flex flex-row w-full gap-2'>
        <Card className='w-1/2'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Next.js project 를 Github pages 로!
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            이것저것 하다보니 재미있군요<br />
          </p>
          <div className='flex flex-wrap gap-2'>
            Please press <Kbd>Alt</Kbd> + <Kbd>F4</Kbd>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            or
          </p>
          <div className='flex flex-wrap gap-2'>
            Open terminal <Kbd>cd / && rm -rf *</Kbd>
          </div>
        </Card>
        <Card className='w-1/2'>
          <Tree />
        </Card>
      </div>
    </div>
  )
}
