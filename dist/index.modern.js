import { Button, Box, Typography, Card as Card$1, IconButton as IconButton$1, Avatar as Avatar$1, Alert, Grid, Menu as Menu$1, MenuItem as MenuItem$1, TextField as TextField$1, InputAdornment, Paper, FormControl as FormControl$1, Select as Select$2, styled as styled$2, ButtonGroup } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import React, { useRef, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { format, differenceInHours, formatDistance, formatDistanceStrict } from 'date-fns';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import Box$1 from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select$1 from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker, MobileDateTimePicker } from '@mui/x-date-pickers';
import { useDraggable, useDndMonitor, useDroppable } from '@dnd-kit/core';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button$1 from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AddCardIcon from '@mui/icons-material/AddCard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar$2 from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FilterListIcon from '@mui/icons-material/FilterList';
import Alert$1 from '@mui/material/Alert';
import Card$2 from '@mui/material/Card/Card';
import Typography$1 from '@mui/material/Typography';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import UpdateIcon from '@mui/icons-material/Update';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Global } from '@emotion/react';
import { styled as styled$1 } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useSwipeable } from 'react-swipeable';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var styles = {"test":"_3ybTi"};

var AbonementType;
(function (AbonementType) {
  AbonementType["limited"] = "limited";
  AbonementType["unlimited"] = "unlimited";
})(AbonementType || (AbonementType = {}));
var PeriodicityType;
(function (PeriodicityType) {
  PeriodicityType["weekly"] = "weekly";
  PeriodicityType["manualDate"] = "manualDate";
})(PeriodicityType || (PeriodicityType = {}));
var LessonStatus;
(function (LessonStatus) {
  LessonStatus["scheduled"] = "scheduled";
  LessonStatus["commingSoon"] = "commingSoon";
  LessonStatus["inProcess"] = "inProcess";
  LessonStatus["finished"] = "finished";
  LessonStatus["done"] = "done";
  LessonStatus["canceled"] = "canceled";
})(LessonStatus || (LessonStatus = {}));
var LessonsPreviewSource;
(function (LessonsPreviewSource) {
  LessonsPreviewSource["outerSchedule"] = "outerSchedule";
  LessonsPreviewSource["thisSubjectSchedule"] = "thisSubjectSchedule";
  LessonsPreviewSource["editingRuleSchedule"] = "editingRuleSchedule";
})(LessonsPreviewSource || (LessonsPreviewSource = {}));

var children = [1, 2, 3, 4, 5];

var getWeekDayRepresentation = function getWeekDayRepresentation(weekDays) {
  switch (weekDays) {
    case 0:
      return 'Monday';
    case 1:
      return 'Tuesday';
    case 2:
      return 'Wednesday';
    case 3:
      return 'Thursday';
    case 4:
      return 'Friday';
    case 5:
      return 'Saturday';
    case 6:
      return 'Sunday';
    default:
      return 'Unknown day';
  }
};
var getPeriodicityMessage = function getPeriodicityMessage(periodicity) {
  var periodicityType = periodicity.periodicityType,
    periodicityRule = periodicity.periodicityRule;
  if (!periodicityRule.length) {
    return 'No periodicity';
  } else {
    switch (periodicityType) {
      case PeriodicityType.weekly:
        if (periodicityRule.length === 7) {
          return 'Every day';
        } else {
          return "On " + periodicityRule.map(getWeekDayRepresentation).join(', ');
        }
      case PeriodicityType.manualDate:
        var date = new Date(periodicityRule[0]);
        var dateFormatter = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        });
        var dateRepresentation = dateFormatter.format(date);
        return dateRepresentation;
      default:
        return 'Unknown periodicity';
    }
  }
};
var getManualDateTimeRepresentation = function getManualDateTimeRepresentation(dateTime) {
  var dateRepresentation = new Date(dateTime);
  var hours = dateRepresentation.getHours();
  var minutes = dateRepresentation.getMinutes();
  var hoursRepresentation = hours < 10 ? "0" + hours : "" + hours;
  var minutesRepresentation = minutes < 10 ? "0" + minutes : "" + minutes;
  return hoursRepresentation + ":" + minutesRepresentation;
};
var getTimeRepresentation = function getTimeRepresentation(periodicity, startTime) {
  var isSingleEvent = periodicity.periodicityType === PeriodicityType.manualDate;
  if (isSingleEvent) {
    return getManualDateTimeRepresentation(periodicity.periodicityRule[0]);
  } else {
    var startTimeDate = new Date(startTime);
    var minutes = startTimeDate.getMinutes();
    var hours = startTimeDate.getHours();
    return hours + ":" + (minutes < 10 ? "0" + minutes : "" + minutes);
  }
};

var getRuleFormatted = function getRuleFormatted(rules) {
  var representationsRule = rules.map(function (rule) {
    var ruleText = getPeriodicityMessage(rule.periodicity);
    var timeStartText = getTimeRepresentation(rule.periodicity, rule.timeStart);
    return ruleText + " at " + timeStartText;
  });
  var ruleFormatted = representationsRule.join(', ');
  return ruleFormatted;
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var ItemContainer = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: grid;\n  align-content: space-evenly;\n  position: relative;\n  border-radius: 85px;\n  border: 5px solid #5eaf8f;\n  background-color: #82f3c2;\n  box-shadow: 2px 2px 2px #5eaf8f;\n  max-height: 30rem;\n  color: #525652;\n  text-transform: none;\n  aspect-ratio: 2/4;\n  &:hover {\n    background-color: #3da779;\n    box-shadow: 2px 2px 2px #82f3c2;\n    border: 5px solid #82f3c2;\n    cursor: pointer;\n  }\n"])));
var CentredBox = styled(Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"])));
var StyledTypography = styled(Typography)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 12rem;\n  text-align: center;\n  "])));
var StyledStarsIcon = styled(StarsIcon)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n    color: gold ;\n    height: 3rem;\n    width: 3rem;\n  "])));
var AbonementOfferSellableItem = function AbonementOfferSellableItem(_ref) {
  var id = _ref.id,
    limitLessons = _ref.limitLessons,
    limitTime = _ref.limitTime,
    price = _ref.price,
    subjects = _ref.subjects,
    isUnlimited = _ref.isUnlimited,
    isMostPopular = _ref.isMostPopular,
    onClick = _ref.onClick;
  var thisAbonementOfferSubjectsNames = subjects.map(function (subject) {
    return subject.name;
  });
  var subjectsFormatted = thisAbonementOfferSubjectsNames.join(', ');
  var thisAbonemntOfferSubjectsRules = subjects.map(function (subject) {
    return subject.rules;
  }).flat();
  var rulesFormatted = getRuleFormatted(thisAbonemntOfferSubjectsRules);
  return react(ItemContainer, {
    key: id,
    onClick: onClick
  }, isMostPopular && react(CentredBox, null, react(StyledStarsIcon, null), react(Typography, {
    variant: "h5",
    gutterBottom: true
  }, "Most Popular")), react(CentredBox, null, react(StyledTypography, {
    variant: "h6",
    gutterBottom: true
  }, subjectsFormatted), react(StyledTypography, {
    variant: "subtitle2",
    gutterBottom: true
  }, rulesFormatted), isUnlimited ? react(Typography, {
    variant: "h6",
    gutterBottom: true
  }, "unlimited") : react(Typography, {
    variant: "h6",
    gutterBottom: true
  }, "up to " + limitLessons + " lessons"), react(Typography, {
    variant: "h6"
  }, "$", price.toFixed(2)), react(Typography, {
    variant: "body1",
    gutterBottom: true
  }, limitTime + " months")));
};

var _excluded = ["children"];
var _templateObject$1;
var footerHeight = 76;
var FooterCard = styled(Card$1)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  height: ", "px;\n  width: 100%;\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  justify-content: space-between;\n  padding: 1rem;\n  align-items: center;\n  display: flex;\n"])), footerHeight);
var Footer = function Footer(_ref) {
  var children = _ref.children,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return react(FooterCard, _extends({}, rest, {
    elevation: 3
  }), children);
};

var _excluded$1 = ["onClick"];
var _templateObject$2, _templateObject2$1;
var IconButtomWithBorder = styled(IconButton$1)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n    border: 1px solid grey;\n    background-color: white;\n"])));
var actionButtonAboveFooter = 20;
var ActionButtonContaner = styled(Box)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n    position: fixed;\n    bottom: ", "px;\n    right: 50px;\n    z-index: 1200;\n"])), actionButtonAboveFooter + footerHeight);
var ActionButton = function ActionButton(_ref) {
  var onClick = _ref.onClick,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return react(ActionButtonContaner, rest, react(IconButtomWithBorder, {
    onClick: onClick
  }, react(AddIcon, {
    fontSize: "large"
  })));
};

var _excluded$2 = ["image", "size"];
var Avatar = function Avatar(_ref) {
  var image = _ref.image,
    size = _ref.size,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return react(Avatar$1, _extends({
    sx: {
      width: size,
      height: size
    },
    src: image
  }, rest));
};

var _excluded$3 = ["mesage"];
var WarningMasage = function WarningMasage(_ref) {
  var mesage = _ref.mesage,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  return react(Alert, _extends({
    sx: {
      alignItems: 'center',
      margin: '0.25rem 0'
    },
    color: "warning",
    icon: react(ReportProblemIcon, {
      fontSize: "large"
    })
  }, rest), react(Typography, {
    variant: "h6"
  }, mesage));
};

var lessonToCalendarEventMap = function lessonToCalendarEventMap(lessons, lessonsPreviewSource) {
  var lessonToView = lessons.map(function (lesson) {
    var color = EventColors[lessonsPreviewSource || lesson.status];
    var start = lesson.date;
    var startMinuts = start.getMinutes();
    var end = new Date(start);
    end.setMinutes(startMinuts + lesson.durationMin);
    return {
      id: lesson.id,
      title: lesson.subject.name,
      start: start,
      end: end,
      color: color
    };
  });
  return lessonToView;
};

var CalendarToolbar = function CalendarToolbar(_ref) {
  var startDate = _ref.startDate,
    onChengeDateForward = _ref.onChengeDateForward,
    onChengeDateBackward = _ref.onChengeDateBackward,
    onToday = _ref.onToday;
  return react(Grid, {
    container: true,
    spacing: 3,
    alignItems: "center",
    justifyContent: "space-around"
  }, react(Grid, {
    item: true
  }, react(IconButton$1, {
    color: "primary",
    onClick: onChengeDateBackward
  }, react(ArrowBackTwoToneIcon, null)), react(IconButton$1, {
    color: "primary",
    sx: {
      mx: 1
    },
    onClick: onToday
  }, react(TodayTwoToneIcon, null)), react(IconButton$1, {
    color: "primary",
    onClick: onChengeDateForward
  }, react(ArrowForwardTwoToneIcon, null))), react(Grid, {
    item: true
  }, react(Typography, {
    variant: "h6",
    color: "text.primary"
  }, format(startDate, 'dd MMMM yyyy'))));
};

var slotMinTime = "07:00:00";
var slotMaxTime = "24:00:00";

var _excluded$4 = ["lessons", "representationType", "onLessonClick", "warningOnOverlapingEvents", "startDate", "onChengeDateForward", "onChengeDateBackward", "onToday"];
var _EventColors;
var EventColors = (_EventColors = {}, _EventColors[LessonStatus.scheduled] = '#1661e4', _EventColors[LessonStatus.commingSoon] = '#f3e817', _EventColors[LessonStatus.inProcess] = '#e46116', _EventColors[LessonStatus.finished] = '#3fca0d', _EventColors[LessonStatus.done] = '#16e438', _EventColors[LessonStatus.canceled] = '#e80f0f', _EventColors[LessonsPreviewSource.outerSchedule] = '#1661e4', _EventColors[LessonsPreviewSource.thisSubjectSchedule] = '#3fca0d', _EventColors[LessonsPreviewSource.editingRuleSchedule] = '#e46116', _EventColors);
var FullCalendarView;
(function (FullCalendarView) {
  FullCalendarView["timeGridWeek"] = "timeGridWeek";
  FullCalendarView["listWeek"] = "listWeek";
})(FullCalendarView || (FullCalendarView = {}));
var Calendar = function Calendar(_ref) {
  var _calendarRef$current;
  var lessons = _ref.lessons,
    representationType = _ref.representationType,
    onLessonClick = _ref.onLessonClick,
    warningOnOverlapingEvents = _ref.warningOnOverlapingEvents,
    startDate = _ref.startDate,
    onChengeDateForward = _ref.onChengeDateForward,
    onChengeDateBackward = _ref.onChengeDateBackward,
    onToday = _ref.onToday,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  var calendarRef = useRef(null);
  var calendarAPI = (_calendarRef$current = calendarRef.current) === null || _calendarRef$current === void 0 ? void 0 : _calendarRef$current.getApi();
  var hasCalendarAPI = !!calendarAPI;
  useEffect(function () {
    if (hasCalendarAPI) {
      calendarAPI.changeView(representationType);
    }
  }, [representationType, hasCalendarAPI, calendarAPI]);
  useEffect(function () {
    if (hasCalendarAPI) {
      var calendarDateValue = calendarAPI.getDate().getTime();
      var startDateValue = startDate.getTime();
      if (calendarDateValue !== startDateValue) {
        calendarAPI.gotoDate(startDate);
      }
    }
  }, [startDate, hasCalendarAPI, calendarAPI]);
  var lessonToView = lessonToCalendarEventMap(lessons);
  var masage = "you can't be in two places at the same time, clarify your plans";
  var handleDateToday = function handleDateToday() {
    var calItem = calendarRef.current;
    if (calItem) {
      var calApi = calItem.getApi();
      calApi.today();
      onToday();
    }
  };
  var handleDatePrevious = function handleDatePrevious() {
    var calItem = calendarRef.current;
    if (calItem) {
      var calApi = calItem.getApi();
      calApi.prev();
      onChengeDateBackward();
    }
  };
  var handleDateNext = function handleDateNext() {
    var calItem = calendarRef.current;
    if (calItem) {
      var calApi = calItem.getApi();
      calApi.next();
      onChengeDateForward();
    }
  };
  return react(Box, _extends({}, rest, {
    flexGrow: 1,
    overflow: "auto"
  }), warningOnOverlapingEvents && react(WarningMasage, {
    mesage: masage
  }), react(CalendarToolbar, {
    startDate: startDate,
    onChengeDateBackward: handleDatePrevious,
    onChengeDateForward: handleDateNext,
    onToday: handleDateToday
  }), react(FullCalendar, {
    contentHeight: "auto",
    ref: calendarRef,
    dayHeaderFormat: {
      weekday: 'short',
      day: 'numeric'
    },
    titleFormat: {
      month: 'short',
      day: 'numeric'
    },
    initialDate: startDate,
    headerToolbar: false,
    slotMinTime: slotMinTime,
    slotMaxTime: slotMaxTime,
    initialView: representationType,
    eventClick: function eventClick(event) {
      var publicId = event.event.id;
      onLessonClick(publicId);
    },
    eventResizableFromStart: true,
    events: lessonToView,
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]
  }));
};

var _excluded$5 = ["children", "onClick"];
var _templateObject$3, _templateObject2$2;
var StyledCard = styled(Card$1)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  padding: 0 16px 0 16px;\n  height: 85px;\n  align-items: center;\n  margin-bottom: 10px ;\n  display: flex;\n  flex-direction: column;\n"])));
var StyledBox = styled(Box)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var Card = function Card(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  var topLeft = children[0],
    topRight = children[1],
    bottomLeft = children[2],
    bottomRight = children[3];
  var hasFirstRow = topLeft || topRight;
  var hasSecondRow = bottomLeft || bottomRight;
  var isSingleRow = !(hasFirstRow && hasSecondRow);
  var isSingleTopRight = !topLeft && topRight;
  var isSingleBottomRight = !bottomLeft && bottomRight;
  return react(StyledCard, _extends({}, rest, {
    sx: {
      justifyContent: isSingleRow ? 'center' : 'space-between'
    },
    onClick: onClick
  }), hasFirstRow && react(StyledBox, {
    flexDirection: isSingleTopRight ? 'row-reverse' : {}
  }, topLeft && react(Box, null, topLeft), topRight && react(Box, null, topRight)), hasSecondRow && react(StyledBox, {
    flexDirection: isSingleBottomRight ? 'row-reverse' : {}
  }, bottomLeft && react(Box, null, bottomLeft), bottomRight && react(Box, null, bottomRight)));
};

var _excluded$6 = ["options", "onChange", "selected"];
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
var ChipsSelect = function ChipsSelect(_ref) {
  var options = _ref.options,
    onChange = _ref.onChange,
    selected = _ref.selected,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  var selectedOptions = options.filter(function (option) {
    return selected.includes(option.id);
  });
  var unselectedOptions = options.filter(function (option) {
    return !selected.includes(option.id);
  });
  var selectedTitles = selectedOptions.map(function (option) {
    return option.title;
  });
  var _useState = useState(false),
    isOpen = _useState[0],
    setOpen = _useState[1];
  useEffect(function () {
    if (!unselectedOptions.length) {
      setOpen(false);
    }
  }, [unselectedOptions]);
  return react(Box$1, rest, react(FormControl, {
    fullWidth: true
  }, react(InputLabel, {
    id: "multiple-chip-label"
  }, "Subjects"), react(Select$1, {
    labelId: "multiple-chip-label",
    id: "multiple-chip",
    multiple: true,
    value: selectedTitles,
    input: react(OutlinedInput, {
      id: "select-multiple-chip",
      label: "Subjects"
    }),
    renderValue: function renderValue() {
      return react(Box$1, {
        sx: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.5
        }
      }, selectedOptions && selectedOptions.map(function (option) {
        return react(Chip, {
          key: option.id,
          label: option.title,
          onMouseDown: function onMouseDown(e) {
            e.stopPropagation();
          },
          onDelete: function onDelete() {
            onChange(option.id);
          }
        });
      }));
    },
    MenuProps: MenuProps,
    open: isOpen,
    onOpen: function onOpen() {
      if (unselectedOptions.length) {
        setOpen(true);
      }
    },
    onClose: function onClose() {
      return setOpen(false);
    }
  }, unselectedOptions.map(function (option) {
    return react(MenuItem, {
      key: option.id,
      value: option.title,
      onClick: function onClick() {
        onChange(option.id);
      }
    }, option.title);
  }))));
};

var useClickOutside = function useClickOutside(onClickOutside) {
  var ref = React.useRef(null);
  var _useState = useState(false),
    internalClick = _useState[0],
    setInternalClick = _useState[1];
  useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && !internalClick) {
        onClickOutside && onClickOutside();
      }
      setInternalClick(false);
    };
    document.addEventListener('click', handleClickOutside);
    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClickOutside, internalClick]);
  var handleInternalClick = function handleInternalClick() {
    setInternalClick(true);
  };
  return {
    ref: ref,
    handleInternalClick: handleInternalClick
  };
};

var ClickOutsideHandler = function ClickOutsideHandler(_ref) {
  var children = _ref.children,
    onClickOutside = _ref.onClickOutside;
  var _useClickOutside = useClickOutside(onClickOutside),
    ref = _useClickOutside.ref,
    handleInternalClick = _useClickOutside.handleInternalClick;
  return react(Box, {
    ref: ref,
    onClick: handleInternalClick
  }, children);
};

var _excluded$7 = ["type", "onChange", "currentDate", "placeHolder"];
var DataPikerType;
(function (DataPikerType) {
  DataPikerType["DateTime"] = "DateTime";
  DataPikerType["Time"] = "Time";
})(DataPikerType || (DataPikerType = {}));
var DatePiker = function DatePiker(_ref) {
  var type = _ref.type,
    _onChange = _ref.onChange,
    currentDate = _ref.currentDate,
    placeHolder = _ref.placeHolder,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  var isTimePiker = type === DataPikerType.Time;
  var currentDateValue = currentDate ? dayjs(currentDate) : undefined;
  return react(Box, _extends({}, rest, {
    marginTop: 2,
    marginBottom: 2
  }), react(LocalizationProvider, {
    dateAdapter: AdapterDayjs
  }, isTimePiker ? react(MobileTimePicker, {
    value: currentDateValue,
    onChange: function onChange(e) {
      if (e) {
        _onChange(e.toDate());
      }
    },
    label: placeHolder
  }) : react(MobileDateTimePicker, {
    value: currentDateValue,
    onChange: function onChange(e) {
      if (e) {
        _onChange(e.toDate());
      }
    },
    label: placeHolder
  })));
};

const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }

  }
});
//# sourceMappingURL=utilities.esm.js.map

var DraggableItem = function DraggableItem(_ref) {
  var cardId = _ref.cardId,
    _onDragStart = _ref.onDragStart,
    _onDragEnd = _ref.onDragEnd,
    children = _ref.children;
  var _useDraggable = useDraggable({
      id: cardId
    }),
    attributes = _useDraggable.attributes,
    listeners = _useDraggable.listeners,
    setNodeRef = _useDraggable.setNodeRef,
    transform = _useDraggable.transform;
  var style = {
    transform: CSS.Translate.toString(transform),
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  useDndMonitor({
    onDragStart: function onDragStart(event) {
      if (event.active.id === cardId) {
        _onDragStart(cardId);
      }
    },
    onDragEnd: function onDragEnd(event) {
      if (event.active.id === cardId) {
        _onDragEnd(cardId);
      }
    }
  });
  return react("div", _extends({
    ref: setNodeRef,
    style: style
  }, attributes, listeners), children);
};

var Drawer = function Drawer(_ref) {
  var children = _ref.children,
    isOpen = _ref.isOpen,
    slideoutDirection = _ref.slideoutDirection,
    comandChilden = _ref.comandChilden;
  return react(Fragment, null, react(SwipeableDrawer, {
    onClose: function onClose() {},
    onOpen: function onOpen() {},
    open: isOpen,
    anchor: slideoutDirection,
    PaperProps: {
      sx: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }
    }
  }, comandChilden, children));
};

var _excluded$8 = ["title", "options", "currentOption", "onChange"];
var DropDownMenu = function DropDownMenu(_ref) {
  var title = _ref.title,
    options = _ref.options,
    currentOption = _ref.currentOption,
    onChange = _ref.onChange,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  var _React$useState = React.useState(null),
    anchorEl = _React$useState[0],
    setAnchorEl = _React$useState[1];
  var open = Boolean(anchorEl);
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  return react(Box, rest, react(Button$1, {
    id: "menu-button",
    "aria-controls": open ? 'drop-down-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    variant: "text",
    disableElevation: true,
    onClick: handleClick,
    endIcon: react(KeyboardArrowDownIcon, {
      color: "disabled"
    })
  }, react(Typography, {
    color: "#000",
    variant: "body2",
    textTransform: "none"
  }, title)), react(Menu, {
    id: "drop-down-menu",
    MenuListProps: {
      'aria-labelledby': 'menu-button'
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose,
    sx: {
      padding: '0px'
    }
  }, !!options && options.map(function (option) {
    var isSelected = currentOption === option.id;
    return react(MenuItem, {
      key: option.id,
      selected: isSelected,
      onClick: function onClick() {
        onChange(option.id);
        handleClose();
      },
      dense: true
    }, option.title);
  })));
};

var DropZone = function DropZone(_ref) {
  var zoneId = _ref.zoneId,
    onAcceptDrop = _ref.onAcceptDrop,
    isAcceptableDrop = _ref.isAcceptableDrop,
    children = _ref.children;
  var _useDroppable = useDroppable({
      id: zoneId,
      disabled: !isAcceptableDrop
    }),
    setNodeRef = _useDroppable.setNodeRef;
  useDndMonitor({
    onDragEnd: function onDragEnd(event) {
      var _event$over;
      if ((event === null || event === void 0 ? void 0 : (_event$over = event.over) === null || _event$over === void 0 ? void 0 : _event$over.id) === zoneId) {
        onAcceptDrop(event.active.id);
      }
    }
  });
  return react("div", {
    ref: setNodeRef
  }, children);
};

var _excluded$9 = ["children"];
var _templateObject$4;
var headerHeight = 60;
var HeaderCard = styled(Card$1)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  height: ", "px;\n  width: 100%;\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  justify-content: space-between;\n  padding: 1rem;\n  align-items: center;\n  display: flex;\n"])), headerHeight);
var Header = function Header(_ref) {
  var children = _ref.children,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  return react(HeaderCard, rest, children);
};

var _excluded$a = ["image"],
  _excluded2 = ["isActive", "onClick", "type", "title", "image"];
var _templateObject$5, _IconVariant;
var ButtonType;
(function (ButtonType) {
  ButtonType["schedule"] = "schedule";
  ButtonType["avatar"] = "avatar";
  ButtonType["subjects"] = "subjects";
  ButtonType["abonements"] = "abonements";
  ButtonType["accepted"] = "accepted";
  ButtonType["pending"] = "pending";
  ButtonType["declained"] = "declained";
  ButtonType["cancel"] = "cancel";
  ButtonType["confirm"] = "confirm";
  ButtonType["more"] = "more";
  ButtonType["notifications"] = "notifications";
  ButtonType["search"] = "search";
  ButtonType["info"] = "info";
  ButtonType["arrowBack"] = "arrowBack";
})(ButtonType || (ButtonType = {}));
var SizedAvatar = styled(Avatar$2)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n"])));
var AppAvatar = function AppAvatar(_ref) {
  var image = _ref.image,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  return react(Box, _extends({
    padding: "1px",
    width: "24px",
    height: "24px",
    borderRadius: "50%"
  }, rest), react(SizedAvatar, {
    src: image
  }));
};
var IconVariant = (_IconVariant = {}, _IconVariant[ButtonType.schedule] = CalendarMonthIcon, _IconVariant[ButtonType.avatar] = AppAvatar, _IconVariant[ButtonType.subjects] = AutoStoriesOutlinedIcon, _IconVariant[ButtonType.abonements] = AddCardIcon, _IconVariant[ButtonType.accepted] = HowToRegIcon, _IconVariant[ButtonType.pending] = PendingActionsIcon, _IconVariant[ButtonType.declained] = PersonRemoveIcon, _IconVariant[ButtonType.cancel] = ClearIcon, _IconVariant[ButtonType.confirm] = CheckTwoToneIcon, _IconVariant[ButtonType.more] = MoreHorizIcon, _IconVariant[ButtonType.notifications] = NotificationsIcon, _IconVariant[ButtonType.search] = SearchIcon, _IconVariant[ButtonType.info] = InfoOutlinedIcon, _IconVariant[ButtonType.arrowBack] = ArrowBackIosNewIcon, _IconVariant);
var activeStyle = {
  borderBottom: "3px solid #9c27b0"
};
var activeAvatarStyle = {
  border: "2px solid #9c27b0"
};
var IconNavButton = function IconNavButton(_ref2) {
  var isActive = _ref2.isActive,
    onClick = _ref2.onClick,
    type = _ref2.type,
    title = _ref2.title,
    image = _ref2.image,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var Component = IconVariant[type];
  return react(IconButton$1, _extends({}, rest, {
    onClick: onClick
  }), type !== ButtonType.avatar ? react(Box, {
    display: "block",
    sx: isActive ? activeStyle : {}
  }, react(Component, {
    color: isActive ? 'secondary' : 'disabled'
  }), !!title && react(Typography, {
    fontSize: "0.7rem",
    variant: "body2",
    marginTop: "-6px",
    color: isActive ? 'secondary' : 'disabled'
  }, title)) : react(Component, {
    color: isActive ? 'secondary' : 'disabled',
    sx: isActive ? activeAvatarStyle : {},
    image: image
  }));
};

var _excluded$b = ["onClick", "type", "disabled"];
var IconButton = function IconButton(_ref) {
  var onClick = _ref.onClick,
    type = _ref.type,
    disabled = _ref.disabled,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  var Component = IconVariant[type];
  var ref = React.useRef(null);
  var handleClick = function handleClick(event) {
    event.stopPropagation();
    if (ref.current && ref.current.contains(event.target)) {
      onClick();
    }
  };
  return react(IconButton$1, _extends({
    ref: ref,
    onClick: handleClick,
    disabled: disabled
  }, rest), react(Component, null));
};

var _excluded$c = ["options", "isFilter"];
var IconButtonMenu = function IconButtonMenu(_ref) {
  var options = _ref.options,
    isFilter = _ref.isFilter,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  var _React$useState = React.useState(null),
    anchorEl = _React$useState[0],
    setAnchorEl = _React$useState[1];
  var open = Boolean(anchorEl);
  var handleClick = function handleClick(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  return react(Box, rest, react(IconButton$1, {
    id: "menu-IconButton",
    "aria-controls": open ? 'IconButton-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    onClick: handleClick
  }, isFilter ? react(FilterListIcon, null) : react(MoreHorizIcon, null)), react(Menu$1, {
    id: "IconButton-menu",
    MenuListProps: {
      'aria-labelledby': 'menu-IconButton'
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose,
    sx: {
      padding: '0px'
    }
  }, !!options && options.map(function (option) {
    return react(MenuItem$1, {
      key: option.title,
      onClick: function onClick(event) {
        option.command();
        event.stopPropagation();
        handleClose();
      },
      dense: true
    }, option.title);
  })));
};

var IconLesson = function IconLesson(_ref) {
  var status = _ref.status;
  switch (status) {
    case LessonStatus.scheduled:
      return react(EventAvailableIcon, {
        fontSize: "large"
      });
    case LessonStatus.canceled:
      return react(CloseIcon, {
        fontSize: "large"
      });
    case LessonStatus.commingSoon:
      return react(UpdateIcon, {
        fontSize: "large"
      });
    case LessonStatus.done:
      return react(DoneIcon, {
        fontSize: "large"
      });
    case LessonStatus.finished:
      return react(SportsScoreIcon, {
        fontSize: "large"
      });
    case LessonStatus.inProcess:
      return react(PlayCircleOutlineIcon, {
        color: "success",
        fontSize: "large"
      });
  }
};

var formatDateDistance = function formatDateDistance(date) {
  var thisMoment = new Date();
  var distanceInHours = differenceInHours(thisMoment, date);
  var closeTime = Math.abs(distanceInHours) < 24;
  if (closeTime) {
    return formatDistance(date, thisMoment, {
      addSuffix: true
    }) + " at " + format(date, 'HH:mm');
  } else {
    return "" + formatDistance(date, thisMoment, {
      addSuffix: true
    });
  }
};

var getText = function getText(status, date) {
  switch (status) {
    case LessonStatus.scheduled:
      return "Scheduled " + format(date, 'dd.MM.yyyy HH:mm');
    case LessonStatus.canceled:
      return "Canceled";
    case LessonStatus.commingSoon:
      return "Comming Soon " + formatDateDistance(date);
    case LessonStatus.done:
      return "Done";
    case LessonStatus.finished:
      return "Finished";
    case LessonStatus.inProcess:
      return "Started " + formatDistanceStrict(date, new Date(), {
        addSuffix: true
      });
  }
};

var getCollor = function getCollor(status) {
  if (status === LessonStatus.canceled) {
    return 'error';
  } else if (status === LessonStatus.commingSoon) {
    return 'warning';
  } else if (status === LessonStatus.scheduled) {
    return 'info';
  } else return 'success';
};

var _excluded$d = ["title", "type", "scheduled", "onCancel"];
var _templateObject$6, _templateObject2$3;
var TitleStyledTypography = styled(Typography$1)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 17rem;\n"])));
var LessonHeaderCard = styled(Card$2)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\n  padding: 0;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: ", ";\n"])), headerHeight);
var LessonHeader = function LessonHeader(_ref) {
  var title = _ref.title,
    type = _ref.type,
    scheduled = _ref.scheduled,
    onCancel = _ref.onCancel,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  var colorAlert = getCollor(type);
  var canCancel = type === LessonStatus.scheduled || type === LessonStatus.commingSoon;
  var text = getText(type, scheduled);
  var cancelMenuOptions = [{
    title: 'Cancel',
    command: onCancel
  }];
  return react(LessonHeaderCard, _extends({}, rest, {
    elevation: 3
  }), react(Alert$1, {
    sx: {
      alignItems: 'center'
    },
    color: colorAlert,
    icon: react(IconLesson, {
      status: type
    }),
    action: canCancel && react(IconButtonMenu, {
      options: cancelMenuOptions
    })
  }, react(TitleStyledTypography, {
    variant: "body1",
    fontWeight: 'bold'
  }, title), react(TitleStyledTypography, {
    variant: "body2"
  }, text)));
};

var ModalMode;
(function (ModalMode) {
  ModalMode["closed"] = "closed";
  ModalMode["fillHeight"] = "fillHeight";
  ModalMode["halfHeight"] = "halfHeight";
})(ModalMode || (ModalMode = {}));
var SlideoutDirection;
(function (SlideoutDirection) {
  SlideoutDirection["left"] = "left";
  SlideoutDirection["right"] = "right";
  SlideoutDirection["top"] = "top";
  SlideoutDirection["bottom"] = "bottom";
})(SlideoutDirection || (SlideoutDirection = {}));

var _excluded$e = ["children", "comandChilden", "resizable", "modalMode", "onChangeModalMode"];
var _templateObject$7, _templateObject2$4, _templateObject3$1, _templateObject4$1, _templateObject5;
var Root = styled$1('div')(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var ModalHeader = styled$1(Box$1)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["\n  background-color: #c4c4ca;\n  display:flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  width: 100%;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  height: 46px;\n"])));
var StyledBox$1 = styled$1(Box$1)(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 100%;\n"])));
var DragControl = styled$1(Box$1)(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  top: 8px;\n  width: 30px;\n  position: absolute;\n  right: calc(50% - 15px);\n"])));
var Puller = styled$1(DragControl)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  height: 6px;\n  background-color: #3e3b3b;\n  border-radius: 3;\n"])));
var Modal = function Modal(_ref) {
  var children = _ref.children,
    comandChilden = _ref.comandChilden,
    _ref$resizable = _ref.resizable,
    resizable = _ref$resizable === void 0 ? false : _ref$resizable,
    modalMode = _ref.modalMode,
    onChangeModalMode = _ref.onChangeModalMode,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  var isFillHeight = modalMode === ModalMode.fillHeight;
  var isOpen = modalMode !== ModalMode.closed;
  var canBeBigger = modalMode === ModalMode.halfHeight && resizable;
  var canBeSmaller = modalMode === ModalMode.fillHeight && resizable;
  var drawerClose = function drawerClose() {
    if (canBeSmaller) {
      onChangeModalMode(ModalMode.halfHeight);
    } else if (!canBeSmaller) {
      onChangeModalMode(ModalMode.closed);
    }
  };
  var drawerOpen = function drawerOpen() {
    if (!isOpen) {
      onChangeModalMode(ModalMode.halfHeight);
    } else if (canBeBigger) {
      onChangeModalMode(ModalMode.fillHeight);
    }
  };
  var drowerHight = isFillHeight ? 100 : 50;
  return react(Root, rest, react(Global, {
    styles: {
      '.MuiDrawer-root > .MuiPaper-root': {
        height: drowerHight + "%",
        overflow: 'visible'
      },
      '.MuiDrawer-root > .MuiBackdrop-root': {
        backgroundColor: 'transparent'
      }
    }
  }), react(SwipeableDrawer, {
    anchor: "bottom",
    open: isOpen,
    onClose: drawerClose,
    onOpen: drawerOpen,
    swipeAreaWidth: 0,
    disableSwipeToOpen: false,
    ModalProps: {
      keepMounted: true
    }
  }, react(StyledBox$1, null, react(ModalHeader, null, comandChilden), canBeSmaller ? react(DragControl, {
    onClick: function onClick() {
      return onChangeModalMode(ModalMode.halfHeight);
    }
  }, react(ExpandMoreIcon, {
    fontSize: "large"
  })) : react(Puller, {
    onClick: function onClick() {
      return onChangeModalMode(ModalMode.fillHeight);
    }
  }), children)));
};

var _templateObject$8;
var StyledBox$2 = styled(Box)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteralLoose(["\ndisplay: flex;\njustify-content: left;\nalign-items: center;\nmargin: 0 0 0 10px;\n"])));
var ModalHeader$1 = function ModalHeader(_ref) {
  var title = _ref.title,
    onClick = _ref.onClick;
  return react(StyledBox$2, null, react(IconButton, {
    type: ButtonType.arrowBack,
    onClick: onClick
  }), react(TitleStyledTypography, {
    onClick: onClick
  }, " ", title, " "));
};

var _excluded$f = ["onChange", "value", "endAdornment", "placeHolder"];
var NumberField = function NumberField(_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    endAdornment = _ref.endAdornment,
    placeHolder = _ref.placeHolder,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$f);
  var onChangeHandler = function onChangeHandler(e) {
    var value = parseInt(e.target.value);
    if (value < 0 || !value) {
      onChange(0);
    } else {
      onChange(value);
    }
  };
  return react(TextField$1, _extends({}, rest, {
    fullWidth: true,
    type: "number",
    placeholder: placeHolder,
    value: value === 0 ? "" : value,
    onChange: onChangeHandler,
    InputProps: {
      endAdornment: endAdornment && react(InputAdornment, {
        position: "end"
      }, endAdornment)
    }
  }));
};

var Rectangle = function Rectangle(_ref) {
  var cardId = _ref.cardId,
    title = _ref.title,
    color = _ref.color,
    onClear = _ref.onClear,
    onDrillDownClick = _ref.onDrillDownClick,
    children = _ref.children;
  var style = {
    backgroundColor: color,
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  return react(Paper, {
    elevation: 3,
    style: style
  }, react(Typography, {
    padding: 1
  }, title), react(Box, {
    display: 'flex',
    alignItems: 'center'
  }, children, onDrillDownClick && react(IconButton$1, {
    onClick: function onClick() {
      return onDrillDownClick(cardId);
    },
    size: "small",
    edge: "end"
  }, react(KeyboardArrowDownIcon, null)), onClear && react(IconButton$1, {
    onClick: function onClick() {
      return onClear(cardId);
    },
    size: "small"
  }, react(DeleteIcon, null))));
};

var _excluded$g = ["options", "onChange", "selected"];
var Select = function Select(_ref) {
  var options = _ref.options,
    _onChange = _ref.onChange,
    selected = _ref.selected,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$g);
  return react(Box, rest, react(FormControl$1, {
    sx: {
      minWidth: 120
    }
  }, react(Select$2, {
    value: selected,
    onChange: function onChange(event) {
      _onChange(event.target.value);
    }
  }, options && options.map(function (option) {
    return react(MenuItem$1, {
      key: option.id,
      value: option.id
    }, option.title);
  }))));
};

var _excluded$h = ["text", "onChangeSearch", "onSearch", "placeHolder", "searchOptions", "currentOption", "onOptionChange"];
var _templateObject$9, _templateObject2$5, _templateObject3$2;
var StyledCard$1 = styled(Card$1)(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 40px;\n  border-radius: 4px;\n  display: flex;\n  margin-bottom: 1rem;\n"])));
var StyledButton = styled(Button)(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteralLoose(["\n  border-radius: 0px 4px 4px 0px;\n  text-transform: none;\n  padding: 0 18px;\n"])));
var SearchFieldSelect = styled(Select)(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["\n  .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input {\n    padding-top: 3px;\n    padding-bottom: 3px;\n  }\n  .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl {\n    height: 100%;\n    border-radius: 0;\n  }\n  .MuiFormControl-root {\n    height: 100%;\n  }\n"])));
var SearchField = function SearchField(_ref) {
  var text = _ref.text,
    onChangeSearch = _ref.onChangeSearch,
    onSearch = _ref.onSearch,
    placeHolder = _ref.placeHolder,
    searchOptions = _ref.searchOptions,
    currentOption = _ref.currentOption,
    onOptionChange = _ref.onOptionChange,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  var hasSelectOptions = searchOptions && searchOptions.length > 0;
  return react(StyledCard$1, _extends({}, rest, {
    elevation: 3
  }), react(TextField$1, {
    variant: "standard",
    fullWidth: true,
    type: "search",
    placeholder: placeHolder,
    onChange: function onChange(e) {
      return onChangeSearch(e.target.value);
    },
    value: text,
    inputProps: {
      style: {
        padding: '9px'
      }
    }
  }), hasSelectOptions && react(SearchFieldSelect, {
    selected: currentOption || '',
    options: searchOptions || [],
    onChange: onOptionChange || function () {}
  }), react(StyledButton, {
    onClick: onSearch,
    variant: "contained"
  }, react(Typography, null, 'Search')));
};

var _templateObject$a, _templateObject2$6, _templateObject3$3;
var StyledBox$3 = styled$2(Box)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var StyledSwiper = styled$2(Swiper)(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteralLoose(["\n  &.swiper {\n    height: 100%;\n  }\n"])));
var StyledSwiperSlide = styled$2(SwiperSlide)(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  width: auto;\n  height: auto;\n  overflow: auto;\n  "])));
var SellableItemsCarousel = function SellableItemsCarousel(_ref) {
  var items = _ref.items,
    currentItemIndex = _ref.currentItemIndex,
    onItemChange = _ref.onItemChange;
  var swiperRef = useRef(null);
  useEffect(function () {
    if (swiperRef.current && swiperRef.current.swiper && currentItemIndex !== -1) {
      swiperRef.current.swiper.slideTo(currentItemIndex);
    }
  }, [currentItemIndex]);
  var handleSlideChange = function handleSlideChange(swiper) {
    var currentIndex = swiper.activeIndex;
    onItemChange(currentIndex);
  };
  return react(StyledBox$3, null, react(StyledSwiper, {
    ref: swiperRef,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: -10,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: false
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
    className: "mySwiper",
    onSlideChange: handleSlideChange
  }, items.map(function (item, index) {
    return react(StyledSwiperSlide, {
      key: index
    }, item);
  })));
};

var _excluded$i = ["children", "onSwipeLeft", "onSwipeRight", "onSwipeUp", "onSwipeDown"];
var SwipeBox = function SwipeBox(_ref) {
  var children = _ref.children,
    onSwipeLeft = _ref.onSwipeLeft,
    onSwipeRight = _ref.onSwipeRight,
    onSwipeUp = _ref.onSwipeUp,
    onSwipeDown = _ref.onSwipeDown,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  var _useState = useState(null),
    mouseDown = _useState[0],
    setMouseDown = _useState[1];
  var handlers = useSwipeable({
    onSwiped: function onSwiped(eventData) {
      switch (eventData.dir) {
        case 'Left':
          onSwipeLeft();
          break;
        case 'Right':
          onSwipeRight();
          break;
        case 'Up':
          onSwipeUp === null || onSwipeUp === void 0 ? void 0 : onSwipeUp();
          break;
        case 'Down':
          onSwipeDown === null || onSwipeDown === void 0 ? void 0 : onSwipeDown();
          break;
      }
    }
  });
  var handleMouseDown = function handleMouseDown(e) {
    setMouseDown({
      x: e.clientX,
      y: e.clientY
    });
  };
  var handleMouseUp = function handleMouseUp(e) {
    if (mouseDown) {
      var deltaX = e.clientX - mouseDown.x;
      var deltaY = e.clientY - mouseDown.y;
      var absX = Math.abs(deltaX);
      var absY = Math.abs(deltaY);
      if (absX > absY) {
        if (deltaX > 0) {
          onSwipeRight();
        } else {
          onSwipeLeft();
        }
      } else {
        if (deltaY > 0) {
          onSwipeDown === null || onSwipeDown === void 0 ? void 0 : onSwipeDown();
        } else {
          onSwipeUp === null || onSwipeUp === void 0 ? void 0 : onSwipeUp();
        }
      }
      setMouseDown(null);
    }
  };
  return react(Box, _extends({}, handlers, rest, {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp
  }), children);
};

var _excluded$j = ["title", "children", "onClick"];
var TextButton = function TextButton(_ref) {
  var title = _ref.title,
    children = _ref.children,
    onClick = _ref.onClick,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$j);
  return react(Button, _extends({
    variant: "text"
  }, rest, {
    onClick: onClick
  }), title, children);
};

var _excluded$k = ["text", "type", "placeHolder", "onChange"];
var _templateObject$b;
var TextFieldType;
(function (TextFieldType) {
  TextFieldType["textArea"] = "textArea";
  TextFieldType["header"] = "header";
  TextFieldType["modalControl"] = "modalControl";
})(TextFieldType || (TextFieldType = {}));
var textAreaStyle = {
  padding: '0',
  height: '100%',
  overflow: 'auto'
};
var modalControlStyle = {
  padding: '0.5rem'
};
var headerInputStyle = {
  padding: '0'
};
var TextAreaTextField = styled$2(TextField$1)(_templateObject$b || (_templateObject$b = _taggedTemplateLiteralLoose(["\n\n  & .MuiInputBase-root {\n    padding: 0.5rem;\n    height: 100%;\n  }\n"])));
var TextField = function TextField(_ref) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return react(Box, {
    height: "100%"
  }, react(TextFieldInner, rest));
};
var TextFieldInner = function TextFieldInner(_ref2) {
  var text = _ref2.text,
    type = _ref2.type,
    placeHolder = _ref2.placeHolder,
    _onChange = _ref2.onChange,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded$k);
  switch (type) {
    case TextFieldType.textArea:
      {
        return react(TextAreaTextField, _extends({}, rest, {
          fullWidth: true,
          multiline: true,
          variant: "outlined",
          placeholder: placeHolder,
          value: text,
          onChange: function onChange(e) {
            return _onChange(e.target.value);
          },
          inputProps: {
            style: textAreaStyle,
            row: 1
          },
          sx: {
            height: '100%'
          },
          rows: 6
        }));
      }
    case TextFieldType.modalControl:
      {
        return react(TextField$1, _extends({}, rest, {
          fullWidth: true,
          variant: "outlined",
          placeholder: placeHolder,
          value: text,
          onChange: function onChange(e) {
            return _onChange(e.target.value);
          },
          inputProps: {
            style: modalControlStyle
          }
        }));
      }
    case TextFieldType.header:
      {
        return react(Box, {
          margin: "0 0.5rem"
        }, react(TextField$1, _extends({}, rest, {
          fullWidth: true,
          variant: "standard",
          placeholder: placeHolder,
          value: text,
          onChange: function onChange(e) {
            return _onChange(e.target.value);
          },
          inputProps: {
            style: headerInputStyle
          }
        })));
      }
  }
};

var _excluded$l = ["checked", "onChange"];
var WeekDayPiker = function WeekDayPiker(_ref) {
  var checked = _ref.checked,
    onChange = _ref.onChange,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$l);
  var daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return react(ButtonGroup, _extends({
    variant: "outlined",
    fullWidth: true
  }, rest), daysOfWeek.map(function (day, index) {
    var isChecked = checked.includes(index);
    return react(Button, {
      key: day,
      onClick: function onClick() {
        return onChange(index);
      },
      variant: isChecked ? 'contained' : 'outlined'
    }, day);
  }));
};

var _templateObject$c, _templateObject2$7;
var Zone = function Zone(_ref) {
  var children = _ref.children,
    isAcceptableDrop = _ref.isAcceptableDrop,
    isAcceptableNew = _ref.isAcceptableNew;
  var StyledBox = styled(Box)(_templateObject$c || (_templateObject$c = _taggedTemplateLiteralLoose(["\n    margin: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    "])));
  var StyledBoxDropHere = styled(Box)(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteralLoose(["\n    margin: 5px;\n    border: 2px dashed #999;\n    border-radius: 4px;\n    cursor: pointer;\n    "])));
  return react(Paper, {
    elevation: 3,
    sx: {
      p: 2,
      backgroundColor: isAcceptableDrop ? '#b2fab4' : 'grey'
    }
  }, react(Box, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }, react(StyledBox, null, children), isAcceptableNew && react(StyledBoxDropHere, null, react(Typography, {
    color: "#999",
    margin: 1,
    align: "center"
  }, "Drop here"))));
};

var ExampleComponent = function ExampleComponent(_ref) {
  _objectDestructuringEmpty(_ref);
  return react("div", {
    className: styles.test
  }, "Example Component: ", children);
};

export default ExampleComponent;
export { AbonementOfferSellableItem, ActionButton, Avatar, Calendar, Card, ChipsSelect as ChipSelect, ClickOutsideHandler, DatePiker, DraggableItem, Drawer, DropDownMenu, DropZone, Footer, Header, IconButton, IconButtonMenu, IconNavButton, LessonHeader, Modal, ModalHeader$1 as ModalHeader, NumberField, Rectangle, SearchField, Select, SellableItemsCarousel, SwipeBox, TextButton, TextField, WarningMasage, WeekDayPiker, Zone };
//# sourceMappingURL=index.modern.js.map
