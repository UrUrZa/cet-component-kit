import { createTeacherHOCDecorator } from "../../teacher/hoc/TeacherStateDecorator";
import { render } from '@testing-library/react';
import { HOC } from "../hoc/types";
import { createStudentHOCDecorator } from "../../student/hoc/StudentStoreDecorator";

export const renderTeacherHOC = async (Hoc: HOC) => {
  const { HocDecorator, store } = createTeacherHOCDecorator();
  const HocStoryToRender = HocDecorator(() => <Hoc />);
  const { container } = await render(HocStoryToRender);
  return { container, teacherStore: store };
};

export const renderStudentHOC = async (Hoc: HOC) => {
  const { HocDecorator, store } = createStudentHOCDecorator();
  const HocStoryToRender = HocDecorator(() => <Hoc />);
  const { container } = await render(HocStoryToRender);
  return { container, studentStore: store };
};