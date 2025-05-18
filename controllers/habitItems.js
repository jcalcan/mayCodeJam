const { ObjectId } = require("mongoose").Types;
const HabitItem = require("../models/habitItem");

const {
  CREATED,
  OK,
  BAD_REQUEST_ERROR_MESSAGE,
  ITEM_NOT_FOUND_MESSAGE,
  ITEM_DELETED_MESSAGE,
  AUTHENTICATION_FAIL_MESSAGE,
  INVALID_URL_MESSAGE,
  UnauthorizedError
} = require("../utils/errors");

const { BadRequestError, NotFoundError } = require("../utils/errors/index");

const getItems = async (req, res, next) => {
  try {
    const habits = await HabitItem.find({});

    res.status(OK).json({ data: habits });
  } catch (err) {
    next(err);
  }
};

const createItem = async (req, res, next) => {
  try {
    if (!URL.canParse(req.body.imageUrl)) {
      return next(new BadRequestError(INVALID_URL_MESSAGE));
    }

    if (!req.user) {
      return next(new UnauthorizedError(AUTHENTICATION_FAIL_MESSAGE));
    }
    const item = await HabitItem.create({
      habit: req.body.habit,
      owner: req.user._id
    });

    return res.status(CREATED).json(item);
  } catch (err) {
    if (err.name === "ValidationError") {
      return next(new BadRequestError(INVALID_URL_MESSAGE));
    }

    return next(err);
  }
};

const deleteItem = async (req, res, next) => {
  const { itemId } = req.params;
  try {
    if (!ObjectId.isValid(itemId)) {
      return next(new BadRequestError(BAD_REQUEST_ERROR_MESSAGE));
    }

    const result = await HabitItem.deleteOne({
      _id: itemId,
      owner: req.user._id
    });
    if (result.deletedCount === 0) {
      return next(new NotFoundError(ITEM_NOT_FOUND_MESSAGE));
    }
    console.log(`Item successfully deleted with ID: ${itemId}`);
    return res.status(OK).json({ message: ITEM_DELETED_MESSAGE });
  } catch (err) {
    console.error(err);

    return next(err);
  }
};

const likeItem = async (req, res, next) => {
  const { itemId } = req.params;

  if (!ObjectId.isValid(itemId)) {
    return next(new BadRequestError(BAD_REQUEST_ERROR_MESSAGE));
  }
  try {
    const item = await HabitItem.findByIdAndUpdate(
      itemId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    ).orFail();
    return res.status(OK).json(item);
  } catch (error) {
    if (error.name === "DocumentNotFoundError") {
      return next(new NotFoundError(ITEM_NOT_FOUND_MESSAGE));
    }

    return next(error);
  }
};

const unlikeItem = async (req, res, next) => {
  const { itemId } = req.params;

  if (!ObjectId.isValid(itemId)) {
    return next(new BadRequestError(BAD_REQUEST_ERROR_MESSAGE));
  }
  try {
    const item = await HabitItem.findByIdAndUpdate(
      itemId,
      { $pull: { likes: req.user._id } },
      { new: true }
    ).orFail();
    return res.status(OK).json(item);
  } catch (error) {
    if (error.name === "DocumentNotFoundError") {
      return next(new NotFoundError(ITEM_NOT_FOUND_MESSAGE));
    }

    return next(error);
  }
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  unlikeItem
};
