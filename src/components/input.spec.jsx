import React from "react";
import { render, cleanup, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {UserSignupPage} from './UserSignupPage';


beforeEach(cleanup);
