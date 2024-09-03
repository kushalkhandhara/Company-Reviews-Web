import {body} from "express-validator"

export const validateContactForm = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email')
        .isEmail().withMessage('Please enter a valid email address')
        .normalizeEmail(),
    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 6 }).withMessage('Message must be at least 6 characters long')
];

export const validationReviewsForm = [
    body('name')
        .trim()
        .notEmpty().withMessage("Name is required")
        .isLength({ min: 3 }).withMessage("Name should be at least 3 characters long"),
    
    body('email')
        .isEmail().withMessage("Please enter a valid email address")
        .normalizeEmail(),

    body('company_name')
        .trim()
        .notEmpty().withMessage("Company name is required")
        .isLength({ min: 3 }).withMessage("Company name should be at least 3 characters long"),

    body('company_website')
        .trim()
        .notEmpty().withMessage("Company website is required")
        .isURL().withMessage("Please enter a valid URL for the company website"),

    body('bond')
        .trim()
        .notEmpty().withMessage("Please select Yes or No")
        .isLength({ max: 3 }).withMessage("Bond selection should be at most 3 characters long"),

    body('stay')
        .trim()
        .notEmpty().withMessage("Please enter how much time you were committed to that company")
        .isLength({ min: 3 }).withMessage("Stay duration should be at least 3 characters long"),

    body('offer_letter')
        .trim()
        .notEmpty().withMessage("Please upload the offer letter")
        .isLength({ min: 4 }).withMessage("Offer letter file name should be at least 4 characters long"),

    body('rating')
        .trim()
        .notEmpty().withMessage("Please select a rating for the company")
        .isLength({ max: 3 }).withMessage("Rating should be at Most 1 character long"),

    body('workMsg')
        .trim()
        .notEmpty().withMessage("Please enter a message about your work experience at the company")
        .isLength({ min: 6 }).withMessage("Work message should be at least 6 characters long"),

    body('workprofile')
    .trim()
    .notEmpty().withMessage("Please Select Valid Option")
    .isLength({min : 3}).withMessage("Please Select Valid Option")

    
];