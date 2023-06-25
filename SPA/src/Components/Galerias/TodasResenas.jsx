import { Button, Timeline } from 'flowbite-react';

export default function TodasResenas() {
    return (
        <div className='p-4 lg:p-8 rounded-xl bg-fuerte_claro bg-opacity-75 h-full mt-4 lg:mt-8 mb-4 lg:mb-8' >
            <Timeline className='border-fuerte'>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time className='text-white'>
                            valoracion
                        </Timeline.Time>
                        <Timeline.Title className='text-oscuro font-extrabold'>
                            Anggelo Huz
                        </Timeline.Title>
                        <Timeline.Body>
                            <p className='text-black'>
                                Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                                E-commerce & Marketing pages.
                            </p>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}
