import React, { LegacyRef, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { ILesson, LessonStatus, LessonsPreviewSource, id } from "../../types/domain";
import { Box } from '@mui/material';
import { EventClickArg } from '@fullcalendar/core';
import { WarningMasage } from '../WarningMasage';
import { lessonToCalendarEventMap } from './lessonToCalendarEventMap';
import { CommonElementProps } from '../types';
import { CalendarToolbar } from './CalendarToolbar';
import { slotMaxTime, slotMinTime } from './timeSlots';

export interface ICalendarProps extends CommonElementProps {
    lessons: ILesson[ ];
    representationType: FullCalendarView
    onLessonClick: (id:id) => void;
    warningOnOverlapingEvents?: boolean;
    startDate: Date;
    onChengeDateForward: () => void;
    onChengeDateBackward: () => void;
    onToday: () => void;
};
export interface ICalendarEvent {
  id: id;
  title: string;
  start: string | Date;
  end: string | Date;
  color: string;
};

export const EventColors = {
  [LessonStatus.scheduled]: '#1661e4',
  [LessonStatus.commingSoon]: '#f3e817',
  [LessonStatus.inProcess]: '#e46116',
  [LessonStatus.finished]: '#3fca0d',
  [LessonStatus.done]: '#16e438',
  [LessonStatus.canceled]: '#e80f0f',

  [LessonsPreviewSource.outerSchedule]: '#1661e4',
  [LessonsPreviewSource.thisSubjectSchedule]: '#3fca0d',
  [LessonsPreviewSource.editingRuleSchedule]: '#e46116',
}

export enum FullCalendarView {
  timeGridWeek = 'timeGridWeek',
  listWeek = 'listWeek',
};



export const Calendar: React.FC<ICalendarProps> = ({
  lessons, 
  representationType, 
  onLessonClick, 
  warningOnOverlapingEvents, 
  startDate,
  onChengeDateForward, 
  onChengeDateBackward,
  onToday, 
  ...rest
}) => {
  const calendarRef: LegacyRef<FullCalendar> = useRef(null);
  const calendarAPI = (calendarRef.current as any)?.getApi()
  const hasCalendarAPI = !!calendarAPI;

  useEffect(() => {
    if ( hasCalendarAPI ) {
      calendarAPI.changeView(representationType);
    }
  },[representationType, hasCalendarAPI, calendarAPI]);

  useEffect(() => {
    if ( hasCalendarAPI ) {
      const calendarDateValue: number = calendarAPI.getDate().getTime();
      const startDateValue: number = startDate.getTime();

      if (calendarDateValue !== startDateValue) {
        calendarAPI.gotoDate(startDate);
      }
    }
  },[startDate, hasCalendarAPI, calendarAPI]);

  const lessonToView: ICalendarEvent[] = lessonToCalendarEventMap(lessons);

  const masage = `you can't be in two places at the same time, clarify your plans`

  const handleDateToday = () => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.today();
      onToday();
    }
  };

  const handleDatePrevious = () => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.prev();
      onChengeDateBackward();
    }
  };

  const handleDateNext = () => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.next();
      onChengeDateForward();
    }
  };

  return (
      <Box 
        {...rest}
        flexGrow={1}
        overflow='auto'
      >
        {warningOnOverlapingEvents&&
          <WarningMasage mesage={masage}/>
        }
        <CalendarToolbar 
          startDate={startDate} 
          onChengeDateBackward={handleDatePrevious}
          onChengeDateForward={handleDateNext}
          onToday={handleDateToday}
        />
        <FullCalendar
          contentHeight='auto'
          ref={calendarRef}
          dayHeaderFormat={{weekday: 'short', day: 'numeric', }}
          titleFormat={{month: 'short', day: 'numeric'}}
          initialDate={startDate}
          headerToolbar={false}
          slotMinTime= {slotMinTime}
          slotMaxTime= {slotMaxTime}
          initialView={representationType}
          eventClick={(event: EventClickArg)=> {
            const publicId = event.event.id;
            onLessonClick(publicId);
          }}
          eventResizableFromStart
          events={lessonToView}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin
          ]}
        />
      </Box>
    );
}
